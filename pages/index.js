import {Container, Row, Col, Button, Image, Card} from "react-bootstrap";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Head from "next/head";
import { APP_ROUTE } from "./404";
import axios from "axios";
//import Image from "next/image";

export async function getStaticProps(context) {
  const response = await axios.get("https://backend.mintables.club/marketplaces")
  return {
    props: { data: response.data }, // will be passed to the page component as props
  }
}

export default function Home({data}) {
  const marketplaces = data.results;
  return (
    <div>
      <Head>
        <title>Mintables</title>
        <meta name="description" content="Mintables is the easiest way to create and launch NFT's without code." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="root">
        <div className="py-5">
          <Container>
            <Row>
              <Col lg={6} md={6}>
                <div className="pt-5">
                  <div className="display-2 mb-4 font-weight-bold">
                    <RoughNotationGroup show={true}>
                      <RoughNotation type="highlight" strokeWidth={6} color="#0090e7" order="1" iterations={1}>
                        Everything
                      </RoughNotation> artists need to <RoughNotation type="highlight" strokeWidth={6} color="#8f5fe8" order="2" iterations={1}>
                        create
                      </RoughNotation>, <RoughNotation type="highlight" strokeWidth={6} color="#00d25b" order="3" iterations={1}>
                        deploy
                      </RoughNotation>, and <RoughNotation type="highlight" strokeWidth={6} color="#fc424a" order="4" iterations={1}>
                        mint
                      </RoughNotation> NFTs.
                    </RoughNotationGroup>
                  </div>
                  <div className="h3 font-weight-light mb-4 subtext">
                    🙈 Create an NFT collection in minutes.<br/>
                    💡 No-code smart contract deployments.<br/>
                    💎 Customizable, fun minting pages.<br/>
                  </div>
                  <div className="d-flex pb-4 mb-4" style={{justifyContent: 'space-between'}}>
                    <Button size="lg" variant="info" href={APP_ROUTE} className="call-to-action">
                      Browse Collections
                    </Button>

                    <Button variant="outline-info" href={APP_ROUTE} size="lg" className="call-to-action">
                      I&apos;m a Creator
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} className="text-center order-first order-md-last">
                <Image src="/landing_page/marketplace.gif"/>
              </Col>
            </Row>

            <div className="my-2 display-2 font-weight-bold">See our collections</div>
            <Row>
              {marketplaces.map((marketplace) => {
                return (
                  <Col key={marketplace.id} className="my-2" md={2} lg={3}>
                    <a href={`${APP_ROUTE}/m/${marketplace.slug}`} className="link-unstyled">
                      <Card className="p-2 marketplace-preview">
                        <Image src={marketplace.preview_nft.image_url} fluid />
                        <div>{marketplace.name.substr(0, 20)} {marketplace.name.length > 20 && "..."}</div>
                      </Card>
                    </a>
                  </Col>
                );
              })}
            </Row>
            <div className="w-90">
              <div className="pt-2 my-5">
                <div className="display-4 mb-4 font-weight-bold">
                  <RoughNotationGroup show={true}>
                    <RoughNotation type="underline" strokeWidth={6} color="#8f5fe8">
                      Create
                    </RoughNotation> your collection in our NFT studio.
                  </RoughNotationGroup>
                </div>
                <div className="my-4 display-6">
                  Upload your artwork, and our software will generate unique NFT&apos;s for you.
                </div>
                <div>
                  <Image src="/landing_page/editor-with-preview.png" className="w-100 light-shadow" />
                </div>
              </div>
              <div className="pt-5 my-5">
                <div className="display-4 mb-4 font-weight-bold">
                  <RoughNotationGroup show={true}>
                    <RoughNotation type="underline" strokeWidth={6} color="#00d25b">
                      Deploy
                    </RoughNotation> a smart contract, directly through the app.
                  </RoughNotationGroup>
                </div>
                <div className="my-4 display-6">
                  Deploying smart contracts take forever. Mintables will automatically create a smart contract for your project.
                </div>
                <div>
                  <Image src="/landing_page/deployment-main.png" className="w-100 light-shadow" />
                </div>
              </div>
              <div className="pt-5 my-5">
                <div className="display-4 mb-4 font-weight-bold">
                  <RoughNotationGroup show={true}>
                    <RoughNotation type="underline" strokeWidth={6} color="#fc424a">
                      Mint
                    </RoughNotation> your NFT&apos;s directly through Mintables.
                  </RoughNotationGroup>
                </div>
                <div className="my-4 display-6">
                  You can download your generated NFT&apos;s, or your fans can use our pre-built and customizable minting pages to mint NFT&apos;s.
                </div>
                <div>
                  <Image src="/landing_page/minting-main-cropped.png" className="w-100 light-shadow" />
                </div>
              </div>
            </div>

            <div className="my-5 display-3 font-weight-bold text-center">
              Do what you do best: creating art. We&apos;ll handle the rest.
            </div>
            <Button block variant="info" href={APP_ROUTE} className="huge-button" size="lg">Get Started</Button>
          </Container>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  )
}
