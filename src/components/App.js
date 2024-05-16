import video from "../data/video.js";
import Video from "./Video.js";
import Info from "./Info.js";

function App() {
  console.log("Here's your data:", video);
  return (
    <div>
      <Video />
      <Info 
        title={video.title}
        views={video.views}
        date={video.createdAt}
        likes={video.upvotes}
        dislikes={video.downvotes}
        comments={video.comments}
        />
    </div>
    
  )
  
}

export default App;
