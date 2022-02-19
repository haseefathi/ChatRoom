const MyMessage = ({message}) => {
	const text = message.text;
	const cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
	if(message?.attachments?.length > 0){
		// message is an image
		return (
			<img 
				src = {message.attachments[0].file}
				alt = "message-attachment"
				className="message-image"
				style = {{float : 'right'}}
			/>
		)
	}
	// message is a text
	return (
		<div className = "message" style = {{float: 'right', marginRight: '18px', color : 'white', backgroundColor: '#F49E4C'}}>
			{cleanText}
		</div>	
	);
}

export default MyMessage;