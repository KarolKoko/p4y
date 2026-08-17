import React from 'react'
import styled from 'styled-components'
import bg from '../assets/sect2-bg-2.jpg'
import { useTranslation } from 'react-i18next'
import List from '../components/List'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { AnimatePresence } from 'motion/react'
// import heroVidoe from '../assets/hero-video.mp4'
import {motion} from 'motion/react'

const StyledHeroVideoWrap = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;
    margin-top: 100px;
    min-height: 520px;
    height: 70vh;
`

const StyledHeroWrapper = styled.div< { $bImg: string } >`
    background-image: url(${props => props.$bImg || ''});
    background-size: cover;
    height: 100vh;
    min-height: 820px;
`

const StyledHeroContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 670px 1fr;
    grid-template-rows: calc(100% - 200px);
    gap: 50px;
    max-width: 1800px;
    margin: 0 auto;
`

const StyledHeadingWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 80px;
    gap: 40px;
    background-color: #fff;
    min-height: 520px;
    height: 70vh;
    border-radius: 0 0 10px 10px;
`

const HowItWorks: React.FC = () => {
    const { t } = useTranslation()

    const [containerRef, isVisible] = useElementOnScreen({
        threshold: 0.5,
        reappear: true,
    });

    const liLabels = [
        "Your inventory arrives at our fulfillment center.",
        "Orders from your online store flow directly into our system.",
        "We pick the right products and prepare every order.",
        "We dispatch orders directly to your customers.",
        "We inspect, process, refurbish and repackage returned products.",
        "You get a seamless fulfillment operation while focusing on your business.",
    ]

    const liExtLabels = [
        "Ship your inventory to our fulfillment center. We receive, check, label, and securely store your products, keeping everything organized and ready to go.",
        "Connect your online store with our fulfillment system. When a customer places an order, it is automatically sent to us for processing — no manual work required.",
        "Our team picks the right products from inventory, checks the order, and carefully packs everything according to your requirements and brand standards.",
        "Once packed, the order is handed over to the selected carrier and shipped directly to your customer. You get the tracking information while we take care of the logistics.",
        "If a customer sends something back, we take care of the entire return process — from receiving and inspecting the product to cleaning, refurbishing, repackaging, and returning it to inventory when appropriate.",
        "With fulfillment running in the background, you can focus on what matters most: your products, your customers, and growing your business."
    ]

    // console.log(isVisible)

    return (
        <StyledHeroWrapper $bImg={bg} id='hitw' ref={containerRef}>
            <StyledHeroContent>
                <AnimatePresence initial={false}>
                    {isVisible && (
                        <motion.div
                            initial={{x: -700}}
                            animate={{x: 0}}
                            transition={{duration: 0.5}}
                            exit={{x: -700}}
                        >
                            <StyledHeadingWrap>
                                <h3 style={{
                                    fontSize: "60px",
                                    fontWeight: 600,
                                    marginTop: "70px"
                                }}>{t("sect-2-heading")}</h3>
                                <h4 style={{
                                    fontSize: "20px",
                                    lineHeight: "25px",
                                    fontWeight: 500
                                }}>{t("sect-2-sub-heading")}</h4>
                            </StyledHeadingWrap>
                        </motion.div>   
                    )}
                </AnimatePresence>
                <StyledHeroVideoWrap>
                    {/* <video loop autoPlay muted controls={false} width={"100%"}>
                        <source src={heroVidoe} type="video/mp4" />
                    </video> */}
                    <List label={isVisible ? liLabels : []} labelExt={liExtLabels} />
                </StyledHeroVideoWrap>
            </StyledHeroContent>
        </StyledHeroWrapper>
    )
}

export default HowItWorks
