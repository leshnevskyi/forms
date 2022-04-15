import './style.css';

const Chessboard = () => {
	return (
		<table className='h-full block aspect-square'>
			<tbody className='chess-board'>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square' aria-label='pawn'>
						<img 
							data-chess-piece='pawn' 
							src='https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png'
						/>
					</td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'>
						<img 
							data-chess-piece='pawn' 
							src='https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png'
						/>
					</td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'>
						<img 
							data-chess-piece='king' 
							src='https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png'
						/>
					</td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'>
						<img 
							data-chess-piece='king'
							src='https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png'
						/>
					</td>
					<td className='square'></td>
					<td className='square'>
						<img 
							src='https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png'
						/>
					</td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
				<tr className='row'>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
					<td className='square'></td>
				</tr>
			</tbody>
		</table>
	);
}

export default Chessboard;
