import "./App.css";
const logourl =
  "https://res.cloudinary.com/dmqz317kh/image/upload/v1708016444/OnestepLogo_iyo5ta.png";
function App() {
  return (
    <div className="content w-full h-screen flex justify-center items-start  bg-black">
      <div className="content_section flex flex-col justify-center items-center mt-56 gap-3">
        <img src={logourl} alt="" className="w-56 object-cover" />
        <div className="name text-3xl font-semibold text-white text-center">
          OneStepLabs <div className="launch font-normal">launching Soon</div>
        </div>
      </div>
    </div>
  );
}

export default App;
