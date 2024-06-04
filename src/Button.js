// console에 npm i prop-types 작성후 import
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}) {
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};

// App.js에서 Button을 가져갈 수 있게 하기위함
export default Button;