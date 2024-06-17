import { Row, Col, Container, Button } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { createContext, useContext } from "react";
import { PROFILE_DATA } from "./data";
import TabsSection from "./components/TabsSection";
import StoryHighlights from "./components/StoryHighlights";
import ImageGrid from "./components/ImageGrid";

// export const ProfileContext = createContext(null);
export const ProfileContext = createContext(PROFILE_DATA);

function App() {
  const { image } = useContext(ProfileContext);
  console.log("img link", image);

  return (
    <>
      <ProfileContext.Provider value={PROFILE_DATA}>
        <Row>
          <Col
            sm={1}
            className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light ps-4"
            style={{ position: "sticky", top: 0 }}
          >
            <IconButton className={"bi bi-instagram"} isTop></IconButton>
            <IconButton className={"bi bi-house"}></IconButton>
            <IconButton className={"bi bi-search"}></IconButton>
            <IconButton className={"bi bi-compass"}></IconButton>
            <IconButton className={"bi bi-film"}></IconButton>
            <IconButton className={"bi bi-chat"}></IconButton>
            <IconButton className={"bi bi-plus-square"}></IconButton>
            <Button variant={"light"} style={{ marginBottom: "7px" }}>
              <img
                style={{ width: "30px", borderRadius: "50%" }}
                src={PROFILE_DATA.profile_img}
              ></img>
            </Button>
            <IconButton className={"bi bi-list"} isBottom></IconButton>
          </Col>
          <Col sm={11}>
            <Container>
              <ProfileHeader></ProfileHeader>
              <StoryHighlights></StoryHighlights>
              {/* Tabs Component: Consists of multiple nested Grid Components */}
              {/* Each grid component just pass in an ID to display different images depending on the grid */}
              <TabsSection></TabsSection>
              {/* <ImageGrid></ImageGrid> */}
            </Container>
          </Col>
        </Row>
      </ProfileContext.Provider>
    </>
  );
}

export default App;
