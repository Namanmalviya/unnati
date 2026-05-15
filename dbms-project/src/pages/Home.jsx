import Navigation from "./Navigation";
import Cards from './Cards'
import jobposter from '../jobposter.png'
import competitionposter from '../competitionposter.png'
import organizationposter from '../organizationposter.png'
import schemeposter from '../schemeposter.webp'
import jobposter2 from '../licensed-image.jpg'
import empowerment from '../empowerment.png'
import data from '../data.json'
import bg from '../bg.webp'
import bg2 from '../bg2.jpg'
//import video from '../videoplayback.mp4'
import video3 from '../videoplaybacks.mp4'

import SOSButton from "./sosbutton";
import {useSearch} from './searchcontext'
import axios from 'axios'
import { useLocation } from "react-router-dom";

import { useEffect,useRef,useState } from "react";

function Home(){
const [posts,setPosts]=useState([])
const { searchTerm, setSearchTerm } = useSearch();
 const location=useLocation()
 
useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://unnati-4zdq.onrender.com/posts");
       
        setPosts(res.data); // res.data should contain your JSON array
        console.log("Posts fetched:", res.data);

       
       





      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  const filteredData = posts.filter(item =>
  Object.values(item).some(value =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);





 
  
  
  
    return(<>
    <div className="relative h-screen w-full overflow-hidden ">
      {/* Fixed Navigation */}
      {/* <Navigation className="  left-0 w-full z-50"  ></Navigation> */}
        
      
      {/* Background Video */}
      <video
        src={video3}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-70 "
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Hero Text */}
      <div className="relative flex flex-col justify-center items-start h-full px-8 bg-transparent pt-24">
        <h1 className="text-9xl font-bold font-serif bg-gradient-to-r from-pink-900  to-blue-800 bg-clip-text text-transparent animate-fadeIn">
          Unnati.Ai
        </h1>
        <SOSButton className=''/>
        <p className="text-3xl text-black font-bold font-serif mt-4">
          ------------creating the unexpected------------
        </p>
        <p className="text-black mt-8 max-w-4xl text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit a
          deleniti asperiores, provident earum quaerat nihil voluptas impedit
          amet ea necessitatibus assumenda...
        </p>
      </div>
  <div
    className="flex w-max animate-scrollX mb-10 mt-24"
    style={{ animation: "scrollX 30s linear infinite" }}
  >
    {/* First set of images */}
    <img src={jobposter} className="h-64 w-auto mx-4" alt="job" />
    <img src={schemeposter} className="h-64 w-auto mx-4" alt="scheme" />
    <img src={competitionposter} className="h-64 w-auto mx-4" alt="competition" />
    <img src={organizationposter} className="h-64 w-auto mx-4" alt="organization" />
    <img src={jobposter2} className="h-64 w-auto mx-4" alt="jobposter2" />
            <img src={empowerment} className="h-64 w-auto mx-4" alt="empowerment" />


    {/* Duplicate set for seamless loop */}
    <img src={jobposter} className="h-64 w-auto mx-4" alt="job2" />
    <img src={schemeposter} className="h-64 w-auto mx-4" alt="scheme2" />
    <img src={competitionposter} className="h-64 w-auto mx-4" alt="competition2" />
    <img src={organizationposter} className="h-64 w-auto mx-4" alt="organization2" />
        <img src={jobposter2} className="h-64 w-auto mx-4" alt="jobposter2" />
        <img src={empowerment} className="h-64 w-auto mx-4" alt="empowerment" />

  </div>
  
</div>
{/* bg-gradient-to-r from-pink-900 to-blue-800 */}
  <div className="z-66 bg-black" > 

<u className="font-bold text-3xl flex justify-self-center pt-20 text-white" >grab the opportunities</u>
{/* <div className=" grid grid-cols-3 gap-5 pt-10 ">{
  
  posts.map((item,index)=>{
    return <Cards key={index} {...item} />
  })
  }
    </div> */}
       {/* 🟢 Show filtered results */}
        <div className="relative z-10 mt-32 p-6 grid gap-4 grid-cols-1 md:grid-cols-3">
          {filteredData.map((item,index) => (
            
            <Cards key={index} {...item} />
            // <div key={item.id} className="bg-white p-4 rounded shadow">
            //   <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            //   <p className="text-gray-600">{item.location}</p>
            // </div>
          ))}
        
    </div>
    
    </div>
   
    </>);
}

export default Home;