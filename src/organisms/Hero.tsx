import React from 'react'
import styled from 'styled-components'
// import type { StyledComponentBrand, StyledObject } from 'styled-components/dist/types'
import heroVidoe from '../assets/hero-video.mp4'
import heroBg from '../assets/hero-bg-4.jpg'
import { useTranslation } from 'react-i18next'
import Nav from '../components/Nav'
import caretDown from '../assets/arrow-narrow-down-dashed.png'
import useElementOnScreen from '../hooks/useElementOnScreen'
import { AnimatePresence, motion } from "motion/react"

const StyledHeroVideoWrap = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: flex-end;
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
    margin-top: 100px;
    gap: 40px;
    background-color: #fff;
    min-height: 520px;
    height: 70vh;
    border-radius: 10px 10px 0 0;
`

const Hero: React.FC = () => {
    const { t } = useTranslation()

    const [containerRef, isVisible] = useElementOnScreen({
        threshold: 0.5,
        reappear: true,
    });

    return (
        <StyledHeroWrapper $bImg={heroBg} ref={containerRef}>
            <motion.div
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ duration: 1 }}
            >
                <Nav /> 
            </motion.div>
            <StyledHeroContent>
                <AnimatePresence initial={true}>
                    {isVisible && (
                        <>
                            <motion.div
                                initial={{y: -1000, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{ duration: 1 }}      
                                exit={{y: -1000, opacity: 0}}                  
                            >
                                <StyledHeadingWrap>
                                    <h1 style={{
                                        fontSize: "60px",
                                        fontWeight: 600,
                                        marginTop: "70px"
                                    }}>{t("hero-heading")}</h1>
                                    <h3 style={{
                                        fontSize: "20px",
                                        lineHeight: "25px",
                                        fontWeight: 500
                                    }}>{t("hero-sub-heading")}</h3>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginTop: "60px"
                                    }}>
                                        <img src={caretDown} alt="" style={{ width: "60px" }} draggable={false} />
                                    </div>
                                </StyledHeadingWrap>
                            </motion.div>
                            <motion.div
                                initial={{x: 1000}}
                                animate={{x: 0}}
                                transition={{ duration: 1 }}      
                                exit={{x: 1000}}
                            >
                                <StyledHeroVideoWrap>
                                    <video loop autoPlay muted controls={false} width={"1000px"}  style={{
                                        borderRadius: "10px"
                                    }}>
                                        <source src={heroVidoe} type="video/mp4" />
                                    </video>
                                </StyledHeroVideoWrap>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </StyledHeroContent>
        </StyledHeroWrapper>
    )
}

export default Hero
