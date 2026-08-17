import styled from 'styled-components'
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from 'react'

const StyledLI = styled.li< { $isTab?: boolean } >`
    list-style: none;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px; 
    vertical-align: text-top;
    margin: 30px 0;
    margin-left: ${props => props.$isTab ? '100px' : '0'};
    width: 500px;
    cursor: pointer;
`

interface ListProps {
    label: string[],
    labelExt: string[]
}

const List = ({ label, labelExt }: ListProps) => {
    const [isRevealed, setIsRevealed] = useState<boolean>(false)
    const [labels, setLabels] = useState<{label: string, reveal: boolean}[]>([])
    const yScroll = useRef(0)

    useEffect(() => {
        setLabels([...label.map(l => {
            return {label: l, reveal: false}
        })])
    }, [label])

    const revealMore = (index: number, open: boolean) => {
        setIsRevealed(open)
        if (open) {
            yScroll.current = window.scrollY
            document.body.setAttribute('style', `position: fixed; top: -${yScroll.current}px; left: 0; right: 0`)
            setLabels((prev) => [...prev.slice(0, -(label.length - index)), {label: labelExt[index], reveal: true}, ...prev.slice(index+1)])
        }else {
            document.body.setAttribute('style', '')
            window.scrollTo(0, yScroll.current)
            setLabels([...label.map(l => {
                return {label: l, reveal: false}
            })])
        }
    }

    return (
        <>
            <AnimatePresence initial={false}>
                {isRevealed && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 0.7}}
                        transition={{duration: 0.5, delay: 0.1}}
                        exit={{opacity: 0}}
                        onClick={() => revealMore(0, false)}
                        style={{
                            position: "fixed",
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "#000",
                            top: 0,
                            left: "50%",
                            transform: "translate(-50%)",
                            zIndex: 100,
                            maxWidth: "1920px"
                        }}  
                    ></motion.div>
                )}
            </AnimatePresence>
            <div style={{
                position: 'relative'
            }}>
                <ol>
                    <AnimatePresence initial={false}>
                        {labels.map(({label: l, reveal: r}, index) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    key={index}
                                >
                                    <StyledLI style={{
                                        position: r ? 'absolute' : 'relative',
                                        padding: r ? "40px" : "20px",
                                        fontWeight: r ? 600 : 400,
                                        zIndex: r ? 102 : 0,
                                        transition: "0.3s",
                                        top: "calc(50% - 200px)",
                                        transform: r ? "translate(-20px)" : "translate(0,0)"
                                    }} onClick={() => !isRevealed && revealMore(index, true)} $isTab={isRevealed ? false : Boolean(index % 2)} > <span style={{ fontWeight: 600, fontSize: r ? "50px" : "25px" }}>{index + 1}&nbsp;&nbsp;&nbsp;</span><span style={{ lineHeight: r ? "40px" : "30px", fontSize: r ? "35px" : "20px" }}>{l}</span></StyledLI>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </ol>
            </div>
        </>
    )
}

export default List
