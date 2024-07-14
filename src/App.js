import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"


const App = () => {
  return (
    <>
   <div id="menu_button">
    <i className="fa fa-ellipsis-v fa-2x"></i>
  </div>

  <div id="sidebar">
    <div className="close_btn">x</div>
    <ul>
      <li><a href="https://www.aboutus.free4talk.xyz">About Us</a></li>
      <li><a href="https://www.Contact.free4talk.xyz">Contact Us</a></li>
      <li><a href="https://www.Disclaimer.free4talk.xyz">Disclaimer</a></li>

    </ul>
  </div>

  <div id="age_verification_popup" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Age Verification</h4>
        </div>
        <div className="modal-body">
          <p>You must be 18 years or older to use this website.</p>
          <label>
            <input type="checkbox" id="age_verification_checkbox"> I am 18 years or older </input>
          </label>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" id="age_verification_ok_btn" disabled>OK</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid height-fill">
    <div className="row height-fill pos-middle">
      <div id="video_container" className="col-xs-12">
        <video poster="https://media.istockphoto.com/id/662195074/vector/anonymous-user-icon.jpg?s=612x612&w=0&k=20&c=ZWgmBwLeR2uMBOSbZJ8NC7YDusHjw7YqZQW26LbkYo8=" id="partnerVideo"></video>
        <video poster="https://t4.ftcdn.net/jpg/00/32/44/53/360_F_32445303_fOmurtPlubp0PDwggnsyqhteqLKXsahO.jpg" alt="Self Video" id="selfVideo"></video> 
      </div>
    </div>
  </div>


  <h1>Connect with Strangers on Free4Talk</h1>
  <p>Engage in random video calls and chats with people from all over the world. Make new friends, have fun, and enjoy random conversations!</p>
   <a id="stop_btn" className="btn btn-block btn-danger" title="Stop The Chat">
    <i className="fa-3x"></i>
    <span className="shortcut">Stop</span>
  </a>
  <a id="next2_btn" className="btn btn-block btn-warning" title="Get a Random Stranger">
    <i className="fa-3x"></i>
    <span className="shortcut">Connect</span>
  </a>
  <a id="next_btn" className="btn btn-block btn-success" title="Get a Random Stranger">
    <i className="fa-3x"></i>
    <span className="shortcut">Next</span>
  </a>

  <div id="chat_button">
    <i className="fa fa-comments fa-2x"></i>
    <div className="red_dot"></div>
  </div>

  <div id="status_popup">
    <div className="close_btn">x</div>
    <div className="status_message"></div>
  </div>

  <div id="chat_popup">
    <div className="close_btn">x</div>
    <div className="messages" id="messages_container"></div>
    <div className="input">
      <input type="text" id="message" />
      <button id="send_btn" className="btn btn-success btn-block">Send</button>
    </div>
  </div>
    </>
  );
};

export default App;
