export const arrowDirections = {
  left: 'LEFT',
  right: 'RIGHT'
}

export const useArrowBtn = (listRef) => {
  const onClickArrow = (direction) => {
		const listElement = listRef.current;
    const step = 200;

    if (!listElement) return

    const scrollLeftPosition = listElement.scrollLeft;
    let newLeftPosition = scrollLeftPosition;

    if (direction === arrowDirections.left) {
      newLeftPosition -= step;
    }

    if (direction === arrowDirections.right) {
      newLeftPosition += step;
    }

    listElement.scrollTo({
      left: newLeftPosition,
      behavior: "smooth"
    })

	};

  return { onClickArrow };
}
