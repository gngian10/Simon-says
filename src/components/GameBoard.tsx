import { GREEN, RED, YELLOW, BLUE } from "../constants/colors";
import type { GameBoardProps } from "../interfaces/GameBoardProps";

export const GameBoard = ({
    flashIndex,
    isPlayerTurn,
    onClick,
}: GameBoardProps) => (
    <div className="relative top-[200px]">
        <button
            onClick={() => onClick(GREEN)}
            disabled={!isPlayerTurn}
            className={`absolute bottom-0 left-0 w-32 h-32 bg-green-500 rounded-tr-full hover:opacity-75 hover:disabled:opacity-50 ${
                flashIndex === GREEN ? "" : "opacity-50"
            }`}
        />
        <button
            onClick={() => onClick(RED)}
            disabled={!isPlayerTurn}
            className={`absolute left-0 w-32 h-32 bg-red-500 rounded-br-full hover:opacity-75 hover:disabled:opacity-50 ${
                flashIndex === RED ? "" : "opacity-50"
            }`}
        />
        <button
            onClick={() => onClick(YELLOW)}
            disabled={!isPlayerTurn}
            className={`absolute right-0 w-32 h-32 bg-yellow-500 rounded-bl-full hover:opacity-75 hover:disabled:opacity-50 ${
                flashIndex === YELLOW ? "" : "opacity-50"
            }`}
        />
        <button
            onClick={() => onClick(BLUE)}
            disabled={!isPlayerTurn}
            className={`absolute bottom-0 right-0 w-32 h-32 bg-blue-500 rounded-tl-full hover:opacity-75 hover:disabled:opacity-50 ${
                flashIndex === BLUE ? "" : "opacity-50"
            }`}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-24 bg-gray-800 rounded-full" />
    </div>
);
