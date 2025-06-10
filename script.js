//image abhi nhi aa rhi a sirf naya access key le kar purane wale se replace kr lena to ho jayega. dhanyewad radha rani!!!
document.addEventListener('DOMContentLoaded', () => {
    const accessKey = 'jdLwRkC3QaJaWVO_pEKIloow5LfQNlqu_viGRaW3-us'; // Your valid Unsplash Access Key
    const imageTopics = {
        'image_1': 'technology',
        'image_2': 'health',
        'image_3': 'travel',
        'image_4': 'time management',
        'image_5': 'peace',
        'image_6': 'home',
        'image_7': 'nature',
        'image_8': 'positivity'
    };

    Object.keys(imageTopics).forEach(id => {
        const topic = imageTopics[id];
        fetchImageByTopic(id, topic, accessKey);
    });
});

function fetchImageByTopic(id, topic, accessKey) {
    const apiUrl = `https://api.unsplash.com/photos/random?query=${topic}&client_id=${accessKey}`; // Use the topic for the query parameter
    console.log(`Fetching image for ${id} with topic ${topic} from ${apiUrl}`);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Received data for ${id} with topic ${topic}:`, data);
            const imageElement = document.getElementById(id);
            if (imageElement) {
                const imageSrc = data.urls.regular;
                imageElement.src = imageSrc;
            } else {
                console.error(`Element with ID ${id} not found`);
            }
        })
        .catch(error => {
            console.error(`Error fetching the Unsplash image for ${id} with topic ${topic}:`, error);
        });
}

function readArticle() {
    window.location.href="https://techcrunch.com/category/gadgets/";
}

function readArticle1() {
    window.location.href="https://www.forhers.com/blog/healthy-eating-habits";
}

function readArticle2() {
    window.location.href="https://bucketlistseekers.com/";
}

// function readArticle3() {
//     window.open("https://www.intellspot.com/time-management-strategies/", "_blank");
// }

function readArticle3() {
    window.location.href = "https://www.intellspot.com/time-management-strategies/";
}

function readArticle4() {
    window.location.href = "https://mindfulcreativemuse.com/blog";
}

function readArticle5() {
    window.location.href = "https://inmyownstyle.com/";
}

function readArticle6() {
    window.location.href = "https://klima.com/blog/what-are-green-energy-solutions-and-why-are-they-so-important/";
}

function readArticle7() {
    window.location.href = "https://www.powerofpositivity.com/";
}