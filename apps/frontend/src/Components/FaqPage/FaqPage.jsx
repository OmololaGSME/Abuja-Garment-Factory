import React from 'react'
import { useState } from 'react'
import './FaqPage.css'

const FaqPage = () => {
    const [selected, setSelected] = useState(null)


    const data = [
        {
            Questions: 'What types of fabrics do you work with?',
            Answer: 'We work with a wide range of fabrics including cotton, denim, silk, polyester, Ankara, Aso Oke, Adire, and more.',
        },

        {
            Questions: 'Do you offer custom design services?',
            Answer: 'Yes, we provide custom design services tailored to your specific  requirements, whether for traditional African attire, Western-style  clothing, uniforms, or accessories.',
        },

        {
            Questions: 'What is your production capacity?',
            Answer: 'Our factory has a large capacity to handle orders of any size, ensuring timely delivery without compromising quality.',
        },

        {
            Questions: 'Can you accommodate rush orders?',
            Answer: 'Absolutely, we offer expedited production services for rush orders to ensure on-time delivery, even with tight deadlines.',
        },

        {
            Questions:
                'What is your approach to sustainability and ethical manufacturing?',
            Answer: 'We prioritize sustainable and ethical practices, including fair labor  conditions, environmentally friendly production processes, and the use  of ethically sourced materials.',
        },
    ]

        const toggle = (index) => {
            if (selected === index) {
                return setSelected(null)
            }

            setSelected(index)
        }

    return (
        <div className="mt-10 text-center">
            <h2 className="font-bold text-center lg:text-3xl">
                Frequently asked questions
            </h2>
            <p className="font-bold text-center lg:text-3xl text-2xl ">
                Everything you need to know about us
            </p>

            <div className="accordion mb-0 p-0 h-full text-center">
                {data.map((items, index) => (
                    <div className="items">
                        <div className="title" onClick={() => toggle(index)}>
                            <h9 className="font-bold">{items.Questions}</h9>
                            <span>{selected === index ? '-' : '+'}</span>
                        </div>
                        <div className={selected === index ? 'content show' : 'content'}>
                            {items.Answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FaqPage
