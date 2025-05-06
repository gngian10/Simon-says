export interface GameBoardProps {
    flashIndex: number | undefined;
    isPlayerTurn: boolean;
    onClick: (segment: number) => void;
}
