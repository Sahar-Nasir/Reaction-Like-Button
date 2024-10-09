let likeCount = 0;

function toggleReactions() {
    const reactionList = document.getElementById('list');
    reactionList.style.display = reactionList.style.display === 'block' ? 'none' : 'block';
}

function react(emoji) {
    likeCount++;
    document.getElementById('count').textContent = likeCount;
    document.getElementById("selected-reaction").innerHTML = emoji;
}
