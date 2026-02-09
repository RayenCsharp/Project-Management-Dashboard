import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2"
            />

            <input
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2"
            />

            <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="border p-2"
            />

            <button className="bg-green-600 text-white p-2 rounded">
            Send
            </button>
        </form>
        </div>
    );
}

export default Contact;
