        var musicst = window.localStorage.getItem('musicState');

        const theme = document.getElementById("musick"); 
        const fishy = document.getElementById("fish");

        function likeMusic() {
            window.localStorage.setItem('musicState', 'like');
        }

        function dislikeMusic() {
            window.localStorage.setItem('musicState', 'dislike');
        }

        window.onload = function startMusic() {
            var musicst = window.localStorage.getItem('musicState');

            if (musicst == null) {
                likeMusic();
            }

            if (musicst == 'dislike') {
                fishy.src = "/misc/carbydislike.png"
            console.log(`theme set as ${musicst}`)
            }
            else {
                fishy.src = "/misc/carbyscream.gif"
                theme.play();
                console.log(`theme set as ${musicst}`)
            }
        }
        
        function toggleAudio() {
            var musicst = window.localStorage.getItem('musicState');
            if (musicst == 'dislike') {
                likeMusic();
                fishy.src = "/misc/carbyscream.gif"
                theme.play();
                console.log(`theme is playing and music is set to ${musicst}`);
                
            }
            else {
                dislikeMusic();
                fishy.src = "/misc/carbydislike.png"
                theme.pause();
                console.log(`theme is stopped and music is set to ${musicst}`);
                
            }
            var musicst = window.localStorage.getItem('musicState');
            console.log(`theme set as ${musicst}`);
        }