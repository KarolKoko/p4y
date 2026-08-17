import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import faqBg from '../assets/contact-faq-bg-3.jpg'
import { AnimatePresence, motion } from 'motion/react'
import wrapperBg from '../assets/contact-wrapper-bg-4.png'
import ContactForm from '../components/ContactForm'
import useElementOnScreen from '../hooks/useElementOnScreen'

const StyledHeroWrapper = styled.div< { $bImg?: string } >`
    background-image: url(${props => props.$bImg || ''});
    background-size: 300px;
    height: 100vh;
    min-height: 820px;
    background-color: #fff;
`

const StyledHeroContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 670px 1fr;
    grid-template-rows: 100vh;
    gap: 50px;
    max-width: 1800px;
    margin: 0 auto;
`

const FAQpanel = styled.div< { $bImg: string } >`
    background-image: url(${props => props.$bImg || ''});
    background-position: center center;
    background-color: #fff;
    max-width: 600px;
    border-radius: 10px;
    padding: 20px;
`

const StyledNavButton = styled.button<{ $active: boolean }>`
    border: 0;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${(props) => props.$active ? '#fff' : "#949494"};
    color: ${(props) => props.$active ? '#fff' : "#949494"};
    transform: scale(${(props) => props.$active ? '1.3' : "1"});
    cursor: pointer;
`

const Contact: React.FC = () => {
    const [faqItemsPage, setFaqItemsPage] = useState<number>(1)
    const [faqItemsTrender, setFaqItemsTrender] = useState<string[][]>([])

    const faqItems = [
        ['How do I send my inventory to you?', 'You simply send your products to our fulfillment center. Our team receives, checks, labels, and organizes your inventory so it is ready to fulfill incoming orders.'],
        ['Can you integrate with my online store?', 'Yes. We connect your e-commerce store with our fulfillment system so orders can be automatically transferred to us for processing, reducing manual work and minimizing errors.'],
        ['What happens when a customer places an order?', 'Once an order is received, our team picks the correct products from inventory, checks the order, packs it according to your requirements, and hands it over to the selected carrier for delivery.'],
        ['Can you handle custom packaging?', 'Yes. We can adapt the packing process to your brand requirements, including specific packaging, inserts, labels, and other fulfillment instructions.'],
        ['Do you handle international shipping?', 'Yes. We can support shipping to customers in different markets and work with appropriate carriers to provide efficient delivery options.'],
        ['How do you handle returns?', 'Returned products are received at our fulfillment center and inspected. Depending on their condition, they can be cleaned, repaired or refurbished, repackaged, and returned to inventory.'],
        ['Can you handle products that require refurbishment?', 'Yes. Our returns process can include product inspection, cleaning, refurbishment, repackaging, and quality checks before the product is returned to available inventory.'],
        ['How can I get started?', 'Getting started is simple. Contact us to discuss your products, order volume, requirements, and fulfillment needs. We will help you create a solution tailored to your business.']
    ]

    useEffect(() => {
        setFaqItemsTrender(faqItems.slice((faqItemsPage - 1) * 5, ((faqItemsPage - 1) * 5) + 5))
    }, [faqItemsPage])

    const [containerRef, isVisible] = useElementOnScreen({
        threshold: 0.5,
        reappear: true,
    });

    return (
        <StyledHeroWrapper $bImg={wrapperBg} id='contact'>
            <StyledHeroContent ref={containerRef}>
                <AnimatePresence initial={false}>
                    {isVisible && (
                        <motion.div 
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ scale: 0.5 }}                        
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%"
                        }}>
                            <FAQpanel $bImg={faqBg}>
                                <ul>
                                    {faqItemsTrender.map((item, index) => {
                                        return (
                                            <motion.div
                                                initial={{ x: -200, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                key={item[0].toLowerCase().trim().split(' ').join('')}

                                            >
                                                <li style={{
                                                    color: "#fff",
                                                    margin: "10px 0"
                                                }}>
                                                    <span style={{
                                                        fontWeight: 600,
                                                        fontSize: "30px"
                                                    }}>{item[0]}</span>
                                                    <br />
                                                    <br />
                                                    <span>{item[1]}</span>
                                                </li>
                                            </motion.div>
                                        )
                                    })}
                                    {/* Paginacja sposobem modyfikacji tablicy elementów! Aby osiągnąć efekt animacji */}
                                </ul>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "20px",
                                    marginTop: "40px"
                                }}>
                                    {
                                        faqItems.slice(0, Math.ceil(faqItems.length / 5)).map((x, index) => {
                                            return (
                                                <StyledNavButton onClick={() => setFaqItemsPage(index + 1)} $active={Boolean(index + 1 == faqItemsPage)}>{index}</StyledNavButton>
                                            )
                                        })
                                    }
                                </div>
                            </FAQpanel>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence initial={false}>
                    {isVisible && (
                        <motion.div
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            exit={{ scale: 0.5 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%"
                            }}
                        >
                            <ContactForm />
                        </ motion.div>
                    )}
                </AnimatePresence>
            </StyledHeroContent>
        </StyledHeroWrapper>
    )
}

export default Contact
