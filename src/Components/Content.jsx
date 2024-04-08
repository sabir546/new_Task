

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { News_Data } from "./Data";

const Content = () => {
  return (
    <div className="card flex items-center justify-center gap-3  flex-wrap float-right p-3">
      <Card>
        <div className="bg-yellow-300 ">
          <h1 className="font-bold text-lg text-center pt-5 mb-6 ">
            LATEST STORIES
          </h1>
          {News_Data.map((item, index) => (
            <div key={index} className="px-2 -mt-6 w-[16rem]">
              <CardContent>
                <h2 className="card font-bold text-l text-black">
                  <a href={item.link}>{item.title}</a>
                </h2>
                <h5 className="text-xs m-1 text-gray-700 ">{item.date}</h5>

              </CardContent>
             
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Content;
