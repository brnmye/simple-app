import React, { Component } from "react";

class FrontPage extends Component {
  state = {};
  render() {
    return (
      <div className="max-h-full h-screen bg-black text-xl">
        <div className="justify-center text-center p-4 bg-purple-darkest rounded mb-3">
          <div>
            <span className="text-white">NAVBAR</span>
          </div>
        </div>
        <div className="flex justify-center p-2">
          <div className="w-1/2 max-w-sm rounded shadow-lg ml-2 mr-2 bg-blue-darker">
            <div className="p-4 text-center">
              <div className=" font-bold  text-white">FullStack Portfolio</div>
            </div>
          </div>
          <div className="w-1/2 max-w-sm rounded shadow-lg ml-2 mr-2 bg-blue-darker">
            <div className="p-4 text-center">
              <div className="font-bold  text-white resize">
                The Warmest Moonfucc
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-2">
          <div className="w-1/2 max-w-sm rounded shadow-lg ml-2 mr-2 bg-blue-darker">
            <div className="p-4 text-center">
              <div className=" font-bold  text-white resize">
                The Strangest Nightmare
              </div>
            </div>
          </div>
          <div className="w-1/2 max-w-sm rounded shadow-lg ml-2 mr-2 bg-blue-darker">
            <div className="p-4 text-center">
              <div className="m-0 font-bold  text-white resize">
                The Silliest PearMare
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
//bg-black
//<p className="flex-2 text-grey-lighter text-base">
//Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//Voluptatibus quia, nulla! Maiores et perferendis eaque,
//exercitationem praesentium nihil.
//</p>
