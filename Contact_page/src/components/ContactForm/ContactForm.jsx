import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import { useState } from "react"
const ContactForm = () => {

    const [name,setName]=useState('sangram');
    const [gmail,setGmail]=useState('support@dosomecoding.com');
    const [text,setText]=useState('Fell Free To Contact Us');


    const onSubmit = (e) => {
        e.preventDefault();//on form submit not render the whole page again.
        setName(e.target[0].value);
        setGmail(e.target[1].value);
        setText(e.target[2].value);
    }
   
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button 
                     text="VIA CALLS" icon={<FaPhoneAlt fontSize="24px" />} />
                </div>

                <Button
                    isOutline={true}
                    text="VIA E-MAIL FORM" icon={<HiMail fontSize="24px" />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name"> Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email"> Email</label>
                        <input type="email" name="e-mail" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text"> Text</label>
                        <textarea name="text" rows="8" />
                    </div>

                    <div style={{
                        display:"flex",
                        justifyContent: 'end',
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div className={styles.output}>{name +" " + gmail+" " + text}</div>

                </form>


            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
    )
}

export default ContactForm
