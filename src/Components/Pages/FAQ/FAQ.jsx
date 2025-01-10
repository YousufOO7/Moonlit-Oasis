

const FAQ = () => {
    const faqs = [
        {
            question: "How do I book a room?",
            answer: "You can book a room by browsing the available options, selecting your preferred room, and completing the booking process through our secure payment gateway."
        },
        {
            question: "Can I modify or cancel my booking?",
            answer: "Yes, you can modify or cancel your booking through your account. However, please note that cancellations within 24 hours of the booking date may not be allowed."
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we ensure complete transparency. All costs, including taxes and fees, are displayed during the booking process."
        },
        {
            question: "Is my payment information secure?",
            answer: "Absolutely. We use a secure payment gateway with advanced encryption to protect your payment information."
        },
        {
            question: "How do I know if a room is available?",
            answer: "Real-time availability is displayed for every room. If a room is listed as available, you can proceed with the booking."
        },
        {
            question: "What amenities are included in the rooms?",
            answer: "Each room's amenities are listed in the description. Common amenities include Wi-Fi, air conditioning, room service, and more."
        },
        {
            question: "Do you offer discounts or promotions?",
            answer: "Yes, we occasionally offer discounts and promotions. Be sure to check our website or subscribe to our newsletter for updates."
        },
        {
            question: "Can I book multiple rooms at once?",
            answer: "Yes, you can book multiple rooms in a single transaction, subject to availability."
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-8 dark:text-white ">
            <h1 className="text-4xl font-bold text-center mb-10 underline">Frequently Asked Questions</h1>
            <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        tabIndex={0} 
                        className="collapse dark:bg-black collapse-arrow border border-base-300 bg-base-200 rounded-box"
                    >
                        <div className="collapse-title text-lg font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
