import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const validateForm = () => {
        return form.name.trim() && form.email.trim() && form.message.trim();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            setError(true);
            setTimeout(() => setError(false), 3000);
            return;
        }
        
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="bg-white">
            
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 relative overflow-hidden">
                
                <div className="text-center max-w-2xl z-10 mb-12">
                    <div className="mb-6 text-6xl">💬</div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Get In Touch</h1>
                    <p className="text-xl text-gray-600">
                        Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-700 font-semibold">✅ Message sent successfully! We'll get back to you soon.</p>
                        </div>
                    )}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 font-semibold">❌ Please fill all fields correctly.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Rayen Hidri"
                                value={form.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-blue-500 ${error  ? 'border-red-500' : 'border-gray-200'}`}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Rayen@example.com"
                                value={form.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-blue-500 ${error ? 'border-red-500' : 'border-gray-200'}`}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell us what you think..."
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:border-blue-500 resize-none ${error ? 'border-red-500' : 'border-gray-200'}`}
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl mb-2">📧</div>
                            <p className="text-gray-600 text-sm">Email</p>
                            <p className="font-semibold text-gray-900">hidrirayen@gmail.com</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">📱</div>
                            <p className="text-gray-600 text-sm">Phone</p>
                            <p className="font-semibold text-gray-900">+{216} 44-387-106</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">📍</div>
                            <p className="text-gray-600 text-sm">Address</p>
                            <p className="font-semibold text-gray-900">Sidi Bouzid, Tunisia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
