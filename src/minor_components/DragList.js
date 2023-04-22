import React, { useState } from "react";
import "../pages/form.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DragList = ({ goals, setGoals }) => {
	const [items, setItems] = useState(goals);

	const onDragEnd = (result) => {
		if (!result.destination) return;
		const newItems = Array.from(items);
		const [reorderedItem] = newItems.splice(result.source.index, 1);
		newItems.splice(result.destination.index, 0, reorderedItem);
		setItems(newItems);
		setGoals((prevState) => {
			let newGoals = prevState;
			newGoals["goals"] = newItems;
			return newGoals;
		});
	};

	return (
		<div>
			<label>select order og your goals:</label>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="itemList">
					{(provided) => (
						<div ref={provided.innerRef} {...provided.droppableProps}>
							{items.map(({ id, content }, index) => (
								<Draggable key={id} draggableId={id} index={index}>
									{(provided) => (
										<div
											class="dragBox"
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={{
												cursor: "grab",
												userSelect: "none",
												padding: 8,
												margin: "0 0 8px 0",
												//background: "#ccc",
												...provided.draggableProps.style,
											}}
										>
											{index + 1 + ". " + content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default DragList;
