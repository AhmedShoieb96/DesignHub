export default function ContactForm() {
    return (
        <div className="contact-form">
            <h2 className="title-Contact">Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}