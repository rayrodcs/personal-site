import { useEffect, useState } from "react"

/* 
    Heavily commenting this file as this is a bit more
    complex component to implement, so I wanna write my thinking
    out before I implement.
*/
type SpritePhase =
    | 'hidden'
    | 'entering'
    | 'turning'
    | 'idle'
    | 'confident'


/* using introComplete here to make it so that the sprite trainer only
 comes when the typing of my subtitle finishes */

type SpriteTrainerProps = {
    introComplete: boolean
    className?: string
}

/* -------------------------------------------------------------------------------------------------=
    The main SpriteTrainer character component. It will ive
on an HTML canvas. I can either:

    a. Have the canvas itself move in order to move my sprite
    b. Make the canvas generously large, and operate on the character to move him around

My steps are:

    1. Keep it hidden until I receive the OK from introComplete to move
    him into the 'entering' phase. I will need to use useEffect().
    For now, useEffect's running will be dependent on introComplete's status.
    2. Once good to go, I need to call some sort of move() function on my sprite
    character to move until he reaches where I want then transition him to the turning phase.
        a. I can make him look several different directions, then finally find us,
        and face towards us. 
    3. After facing us, transition to confident, and strike a pose.
    Then move to loop between his 'idle' state, which will loop through idle frame 1 and 2.

*/

export function SpriteTrainer({ introComplete, className }: SpriteTrainerProps) {
    const [spritePhase, setSpritePhase] = useState<SpritePhase>('hidden')

    useEffect(() => {
        if (!introComplete) return;

        const enteringPhase = setTimeout(() => {
            setSpritePhase('entering');
        }, 500)

        // then use some kind of move() function to move my character to the left till he enters the screen.
        return () => clearInterval(enteringPhase)
    }, [introComplete])


    return (
        <div className={`sprite-trainer ${className ?? ''}`} data-phase={spritePhase}>
            <canvas className='sprite-canvas'>

            </canvas>
        </div>
    )
}