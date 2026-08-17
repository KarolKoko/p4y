import { useEffect, useRef, useState } from "react";


type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
};

type Options = {
  threshold: number,
  reappear?: boolean,
}


const useElementOnScreen = (options: Options): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting)
      setIsVisible(true);
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current
    const observer = new IntersectionObserver(callBack, options);
    console.log(observer)
    if (containerRefCurrent)
      observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};


const AnimateOnScroll = ({ children, reappear, threshold = 0.5 }: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  console.log(isVisible)

  return (
    <>
      <div ref={containerRef} style={{
        display: isVisible ? 'block' : "none"
      }}>
        {children}
      </div>
    </>
  );
}

export default AnimateOnScroll;