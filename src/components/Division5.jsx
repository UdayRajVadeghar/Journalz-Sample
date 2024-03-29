
import img1 from "./image3.jpg";
import img2 from "./image4.png";
import img3 from "./image5.png";


const Division5 = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl font-serif pb-5">Reviews</h1>
      </div>
      <div className="commentBox mb-10">
        <div className="smallcommentbox">
          <div className="smallcommentboxsub" id="one">
            <div className="partition1" id="part1"><img src={img1} alt="no" className="rounded-full h-20" /></div>
            <div className="partition2" id="part2"><p className="text-3xl font-serif">Shashank <br></br><p className="text-xl text-gray-600">@shanshank100</p></p></div>
          </div>
          <div className="smallcommentboxsub" id="two">
            
          </div>
        </div>
        <div className="smallcommentbox">
          <div className="smallcommentboxsub" id="one">
            <div className="partition1" id="part1"><img src={img2} alt="no" className="rounded-full h-20" /></div>
            <div className="partition2" id="part2"><p className="text-3xl font-serif">Ashu <br></br><p className="text-xl text-gray-600">@feetfrost200</p></p></div>
            </div>
          <div className="smallcommentboxsub" id="two">
            
          </div>
        </div>
        <div className="smallcommentbox">
          <div className="smallcommentboxsub" id="one">
            <div className="partition1" id="part1"><img src={img3} alt="no" className="rounded-full h-20" /></div>
            <div className="partition2" id="part2"><p className="text-3xl font-serif">Rishit <br></br><p className="text-xl text-gray-600">@hitlerslave</p></p></div>
          </div>
          <div className="smallcommentboxsub" id="two">
            
          </div>
        </div>
      </div>
      
    </div>
      
  );
}

export default Division5;
