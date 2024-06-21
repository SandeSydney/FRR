import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import nyama_choma from "../resources/nyama_choma.jpg";
import nyama_choma2 from "../resources/nyama_choma2.jpg";
import SouthSharpIcon from "@mui/icons-material/SouthSharp";

export default function DiningPage() {
  return (
    <>
      <div className="dining_landing">
        <div className="dining_main">
          <h1 className="font-bold">- Dine With Us -</h1>
          <p className="text-white text-xl md:text-2xl font-semibold font-[Alegreya SC]">
            ... If you haven't had our nyama choma then you haven't had nyama
            choma yet{" "}
            <span>
              <FormatQuoteIcon className="text-[#ffcf62]" />
            </span>
          </p>
          <button className="text-white mt-5 text-xs md:text-sm underline underline-offset-8">
            Scroll Down &nbsp;
            <SouthSharpIcon />
          </button>
        </div>
      </div>
      <Container>
        <div className="dining_choma">
          <Row>
            <Col xs={12} sm={12} md={1}></Col>
            <Col xs={12} sm={12} md={5} className="choma_col">
              <h2>
                Fred's Ranch Nyama Choma.
              </h2>
              <p>
                Enjoy our sumptuous nyama choma as you celebate your events or
                special occassions, such as a weekend family together. It comes
                with a side of the famous staple food ugali and to top it with
                an alluring fresh vegetable salad, kachumbari. It doesn't get
                any better than this.
              </p>
              <img src={nyama_choma} alt="" />
            </Col>
            <Col xs={12} sm={12} md={5}>
              <img className="nyama_img" src={nyama_choma2} alt="" />
            </Col>
            <Col xs={12} sm={12} md={1}></Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
