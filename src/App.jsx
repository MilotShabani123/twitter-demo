import PostsList from "./componennts/PostsList";
import MainHeader from "./componennts/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalItsVisible] = useState(false);

  function showModalHandler() {
    setModalItsVisible(true);
  }

  function hideModalHandler() {
    setModalItsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
