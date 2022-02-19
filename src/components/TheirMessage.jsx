const TheirMessage = ({lastMessage, message}) => {
	const text = message.text;
	const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
	const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
	return (
		<div className = "message-row">
			{isFirstMessageByUser && (
				<div 
					className = "message-avatar"
					style = {{backgroundImage: `url(${message?.sender?.avatar})`}}
				/>
				)	
			}	
			{message?.attachments?.length > 0 
			? ( // message is an image
				<img 
				src = {message.attachments[0].file}
				alt = "message-attachment"
				className="message-image"
				style = {{marginLeft: isFirstMessageByUser ? '4px': '48px'}}/>
			
			) : (
				<div className = "message" style = {{float: 'left', backgroundColor: '#1D3461', color: 'white', marginLeft: isFirstMessageByUser ? '4px': '48px'}}>
					{cleanText}
				</div>	

			)
			
			}
		
		</div>	
	);
}

export default TheirMessage;