import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FLASH_TIME, FLASH_TIME_BEFORE, SEGMENTS } from "./constants/colors";
import { GameBoard } from "./components/GameBoard";

function getRandomSegmentIndex() {
    return SEGMENTS[Math.floor(Math.random() * SEGMENTS.length)];
}

function App() {
    const sequenceRef = useRef<number[]>([getRandomSegmentIndex()]);
    const playerIndexRef = useRef(0);
    const [flashIndex, setFlashIndex] = useState<number | undefined>();
    const [isPlayerTurn, setIsPlayerTurn] = useState(false);

    function flashSequence(index: number) {
        if (index >= sequenceRef.current.length) {
            setFlashIndex(undefined);
            setIsPlayerTurn(true);
            return;
        }

        const value = sequenceRef.current[index];
        setFlashIndex(value);

        setTimeout(() => setFlashIndex(undefined), FLASH_TIME_BEFORE);
        setTimeout(() => flashSequence(index + 1), FLASH_TIME);
    }

    function handleSegmentClicked(clickedValue: number) {
        const currentValue = sequenceRef.current[playerIndexRef.current];

        if (clickedValue !== currentValue) {
            resetGame();
            return;
        }

        playerIndexRef.current++;

        if (playerIndexRef.current === sequenceRef.current.length) {
            sequenceRef.current.push(getRandomSegmentIndex());
            playerIndexRef.current = 0;
            setIsPlayerTurn(false);
            flashSequence(0);
        }
    }

    function resetGame() {
        sequenceRef.current = [getRandomSegmentIndex()];
        playerIndexRef.current = 0;
        setIsPlayerTurn(false);
        flashSequence(0);
    }

    useEffect(() => {
        flashSequence(0);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center pt-12 h-screen">
                <GameBoard
                    flashIndex={flashIndex}
                    isPlayerTurn={isPlayerTurn}
                    onClick={handleSegmentClicked}
                />
                {isPlayerTurn && (
                    <div className="text-2xl font-bold mt-8">Your turn</div>
                )}
            </div>
        </>
    );
}

export default App;
