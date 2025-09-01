export type PieceType = 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn';
export type Player = 'white' | 'black';

export interface Piece {
  type: PieceType;
  color: Player;
}

export type Position = [number, number];
export type Board = (Piece | null)[][];

export interface CastlingRights {
  whiteKingside: boolean;
  whiteQueenside: boolean;
  blackKingside: boolean;
  blackQueenside: boolean;
}

export interface GameState {
  board: Board;
  currentPlayer: Player;
  selectedSquare: Position | null;
  removedSquares: Set<string>;
  gameOver: boolean;
  winner: Player | null;
  removalsUsed: {
    white: number;
    black: number;
  };
  timeLeft: {
    white: number; // en secondes
    black: number; // en secondes
  };
  castlingRights: CastlingRights;
  kingMoved: {
    white: boolean;
    black: boolean;
  };
  rookMoved: {
    whiteKingside: boolean;
    whiteQueenside: boolean;
    blackKingside: boolean;
    blackQueenside: boolean;
  };
  draftState?: DraftState;
}

export interface GameSettings {
  timeLimit: number; // en minutes
  removalsPerPlayer: number; // nombre de suppressions par joueur
  draftMode: boolean; // mode draft activé ou non
}

export interface GameConfig extends GameSettings {
  gameStarted: boolean;
  draftPhase: boolean; // true pendant la phase de placement des pièces
}

export interface DraftState {
  availablePieces: {
    white: PieceType[];
    black: PieceType[];
  };
  selectedPiece: PieceType | null;
  currentDraftPlayer: Player;
}