import Anisha from "../assets/avatar-anisha.png";
import Ali from "../assets/avatar-ali.png";
import Richard from "../assets/avatar-richard.png";
import Shanai from "../assets/avatar-shanai.png";

const TestimonialsData = [
  {
    id: "01",
    avatar: <img src={Anisha} alt="" />,
    name: "Anisha Li",
    testimony:
      "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: "02",
    avatar: <img src={Ali} alt="" />,
    name: "Ali Bravo",
    testimony:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: "03",
    avatar: <img src={Richard} alt="" />,
    name: "Richard Watts",
    testimony:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
  },
  {
    id: "04",
    avatar: <img src={Shanai} alt="" />,
    name: "Shanai Gough",
    testimony:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export default TestimonialsData;
