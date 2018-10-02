const accessKey = '1ec334f064e96f64948f1baf18a87a4fa2c36413f66d0626e56f60a57679f237';

function handleError(error) {
    consele.warn(error);
    return null;
}

export async function getPhotosByKeyword(keyword) {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}`, {
        headers: {
            Authorization: 'Client-ID ' + accessKey
        }
    }).catch(handleError);
    
    const photos = await response.json();
    return photos;
}

