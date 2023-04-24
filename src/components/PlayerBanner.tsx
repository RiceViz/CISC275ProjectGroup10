import React, { FC, useRef, useState } from "react";
import "../App.css";
import { Player, Position, abbrevToPos } from "../interfaces/player";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { posToAbbrev } from "../interfaces/player";
import { User } from "../interfaces/user";
import { Identifier } from "typescript";
import { ItemTypes } from "../interfaces/itemTypes";
import { XYCoord, useDrag, useDrop } from "react-dnd";

// const style = {
//     border: "1px dashed gray",
//     padding: "0.5rem 1rem",
//     marginBottom: ".5rem",
//     backgroundColor: "white",
//     cursor: "move"
// };

// export interface CardProps {
//     id: any;
//     text: string;
//     index: number;
//     moveCard: (dragIndex: number, hoverIndex: number) => void;
// }

// interface DragItem {
//     index: number;
//     id: string;
//     type: string;
// }

// export const Card: FC<CardProps> = ({ id, text, index, moveCard }) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [{ handlerId }, drop] = useDrop<
//         DragItem,
//         void,
//         { handlerId: Identifier | null }
//     >({
//         accept: ItemTypes.PLAYERBANNER,
//         collect(monitor) {
//             return {
//                 handlerId: monitor.getHandlerId()
//             };
//         },
//         hover(item: DragItem, monitor) {
//             if (!ref.current) {
//                 return;
//             }
//             const dragIndex = item.index;
//             const hoverIndex = index;

//             // Don't replace items with themselves
//             if (dragIndex === hoverIndex) {
//                 return;
//             }

//             // Determine rectangle on screen
//             const hoverBoundingRect = ref.current?.getBoundingClientRect();

//             // Get vertical middle
//             const hoverMiddleY =
//                 (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

//             // Determine mouse position
//             const clientOffset = monitor.getClientOffset();

//             // Get pixels to the top
//             const hoverClientY =
//                 (clientOffset as XYCoord).y - hoverBoundingRect.top;

//             // Only perform the move when the mouse has crossed half of the items height
//             // When dragging downwards, only move when the cursor is below 50%
//             // When dragging upwards, only move when the cursor is above 50%

//             // Dragging downwards
//             if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//                 return;
//             }

//             // Dragging upwards
//             if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//                 return;
//             }

//             // Time to actually perform the action
//             moveCard(dragIndex, hoverIndex);

//             // Note: we're mutating the monitor item here!
//             // Generally it's better to avoid mutations,
//             // but it's good here for the sake of performance
//             // to avoid expensive index searches.
//             item.index = hoverIndex;
//         }
//     });

//     const [{ isDragging }, drag] = useDrag({
//         type: ItemTypes.CARD,
//         item: () => {
//             return { id, index };
//         },
//         collect: (monitor: any) => ({
//             isDragging: monitor.isDragging()
//         })
//     });

//     const opacity = isDragging ? 0 : 1;
//     drag(drop(ref));
//     return (
//         <div
//             ref={ref}
//             style={{ ...style, opacity }}
//             data-handler-id={handlerId}
//         >
//             {text}
//         </div>
//     );
// };

/**
 * Makes a condensed, editable player card
 *
 * @param Player
 * @param User
 * @returns JSX.Element
 */
export function PlayerBanner({
    player,
    user
}: {
    player: Player;
    user: User;
}): JSX.Element {
    const [p, setPlayer] = useState<Player>(player);

    const [editMode, seteditMode] = useState<boolean>(false);

    const editable: boolean = editMode && user === "League Manager";
    return (
        <div className="PlayerBanner">
            <Container>
                <Row className="align-items-center justify-content-center">
                    {/* Column 1 */}
                    <Col sm={5}>
                        {/* Player Name */}
                        <RenderPlayerName
                            editMode={editable}
                            playerName={p.name}
                            setPlayerName={(newName: string) =>
                                setPlayer({ ...p, name: newName })
                            }
                        ></RenderPlayerName>
                    </Col>

                    {/* Column 2 */}
                    <Col sm={3}>
                        {/* Player Image */}
                        <Image
                            src={player.imageURL}
                            style={{ height: "64px" }}
                        />
                    </Col>

                    {/* Column 3 */}
                    <Col sm={4}>
                        {/* Player Position */}
                        <RenderPlayerPosition
                            editMode={editable}
                            playerPos={posToAbbrev[p.position]}
                            setPlayerPos={(newPos: Position) =>
                                setPlayer({ ...p, position: newPos })
                            }
                        ></RenderPlayerPosition>
                        {editable || <br></br>}

                        {/* Player Rating */}
                        <RenderPlayerRating
                            editMode={editable}
                            playerRating={p.rating}
                            setPlayerRating={(newRating: number) =>
                                setPlayer({ ...p, rating: newRating })
                            }
                        ></RenderPlayerRating>
                    </Col>

                    {/* Edit Switch */}
                    {user === "League Manager" && (
                        <RenderEditSwitch
                            editMode={editMode}
                            seteditMode={seteditMode}
                        ></RenderEditSwitch>
                    )}
                </Row>
            </Container>
        </div>
    );
}

/**
 *
 * @param editMode boolean: is edit mode
 * @param playerName string: playerName Hook
 * @param setPlayerName (boolean) => void: setter for playerName Hook
 * @returns
 */
function RenderPlayerName({
    editMode,
    playerName,
    setPlayerName
}: {
    editMode: boolean;
    playerName: string;
    setPlayerName: (newName: string) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <Form.Control
                type="text"
                value={playerName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPlayerName(event.target.value)
                }
            />
        );
    } else {
        return <>{playerName}</>;
    }
}

function RenderPlayerPosition({
    editMode,
    playerPos,
    setPlayerPos
}: {
    editMode: boolean;
    playerPos: string;
    setPlayerPos: (newPos: Position) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <Form.Group controlId="positionsDropdown">
                Pos:{" "}
                <Form.Select
                    value={playerPos}
                    onChange={(e) => setPlayerPos(abbrevToPos[e.target.value])}
                >
                    {["F", "D", "G", "M"].map((o: string): JSX.Element => {
                        return (
                            <option key={o} value={o}>
                                {o}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        );
    } else {
        return <>Pos: {playerPos}</>;
    }
}

function RenderPlayerRating({
    editMode,
    playerRating,
    setPlayerRating
}: {
    editMode: boolean;
    playerRating: number;
    setPlayerRating: (newRating: number) => void;
}): JSX.Element {
    if (editMode) {
        return (
            <div>
                Ovr:{" "}
                <Form.Control
                    type="number"
                    value={playerRating}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const clamp = (num: number, min: number, max: number) =>
                            Math.min(Math.max(num, min), max);
                        return setPlayerRating(
                            clamp(parseInt(event.target.value), 0, 99)
                        );
                    }}
                />
            </div>
        );
    } else {
        return <>Ovr: {playerRating}</>;
    }
}

function RenderEditSwitch({
    editMode,
    seteditMode
}: {
    editMode: boolean;
    seteditMode: (iseditMode: boolean) => void;
}): JSX.Element {
    return (
        <Col sm={3}>
            <Form.Check
                className=""
                type="switch"
                id="is-editMode"
                label="Edit"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    seteditMode(event.target.checked)
                }
            />
        </Col>
    );
}
