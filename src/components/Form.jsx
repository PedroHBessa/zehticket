import { AiOutlineClo, AiOutlineClose } from "react-icons/ai";

const Form = ({ title, children }) => {
  const closeWindow = () => {
    console.log((document.querySelector(".form").style.opacity = "0"));
  };

  setTimeout(() => {
    document.querySelector(".form").style.transform = "scale(1)";
  }, 50);

  return (
    <div className="form">
      <span className="close-btn"><AiOutlineClose size={25}/></span>
      
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Form;
