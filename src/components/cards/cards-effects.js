import React, { useState } from 'react';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';



const cards = [
    'https://www.sccpre.cat/mypng/detail/65-655741_arsenal-logo-dream-league-soccer-2018-arsenal-logo.png',
    'https://upload.wikimedia.org/wikipedia/pt/3/39/Celtic_FC_logo.png',
    'https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png',
    'https://cdn.freebiesupply.com/logos/large/2x/f-c-porto-logo-png-transparent.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/518px-Juventus_FC_2017_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_FC_Red_Star_Belgrade.svg/1200px-Logo_FC_Red_Star_Belgrade.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/220px-Borussia_Dortmund_logo.svg.png'
];

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const CardsEffects = () => {
    const [gone] = useState(() => new Set())
    const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))
    const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2
        const dir = xDir < 0 ? -1 : 1
        if (!down && trigger) gone.add(index)
        set(i => {
            if (index !== i) return
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
            const scale = down ? 1.1 : 1
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })
    return props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={
            {
                transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                willChange: 'transform',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        }>
            <animated.div {...bind(i)} style={{
                transform: interpolate([rot, scale], trans),
                backgroundImage: `url(${cards[i]})`,
                marginBottom: '100%',
                zIndex: '1',
                backgroundColor: 'white',
                backgroundSize: 'auto 85%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '40vh',
                maxWidth: '300px',
                height: '60vh',
                maxHeight: '570px',
                willChange: 'transform',
                borderRadius: '10px',
                marginTop: '65%',
                boxShadow: '0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)'
            }} />
        </animated.div>
    ));
};

export default CardsEffects;

