import { useQuery } from "@tanstack/react-query";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../../Loading";
import { useState } from "react";
import Card from "./Card";
import '../../Styles/Headings.css'

const TabJobs = () => {
  // const [jobs, setJobs] = useState([]);
  const [web, setWeb] = useState([]);
  const [digital, setDigital] = useState([]);
  const [graphics,setGraphics] = useState([]);

  const { isPending, error, data } = useQuery({
    queryKey: ["jobs"],
    queryFn:  async() =>{
   return  await fetch("http://localhost:5000/addJobs")
   .then(
    (res) => res.json(),)
   
    
  }
  });

  if (isPending) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;

 
 


  const handleTab = () => {
    
    const webDevelopment = data.filter((job) => job.category == "Web development");
    setWeb(webDevelopment);
   
    const digitalMarket = data.filter((job) =>job.category == "Digital marketing");
    setDigital(digitalMarket);
    const graphicsDesign = data.filter((job) => job.category == "Graphics design");
   setGraphics(graphicsDesign);
   
   
  };

  return (
    <div className="text-center mt-12">
      <h1 className="headings text-center my-8 text-2xl  md:text-5xl font-bold ">
       All the Jobs 
      </h1>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />
      <Tabs >
        <TabList >
          <Tab>All job</Tab>
          <Tab onClick={() => handleTab("Web development")}>Web development</Tab>
          <Tab onClick={() => handleTab("Digital marketing")}>Digital marketing</Tab>
          <Tab onClick={() => handleTab("Graphics design")}>
          Graphics design
          </Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 w-full place-items-center gap-4 my-8  p-6 md:grid-cols-3">
            {data.map((job) => (
              <Card job={job} key={job._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {web.map((job) => (
              <Card job={job} key={job._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {digital.map((job) => (
              <Card job={job} key={job._id}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 w-full place-items-center gap-8 my-8  p-8 md:grid-cols-3">
            {graphics.map((job) => (
              <Card job={job} key={job._id}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabJobs;
