import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    isCreateFile:false,
    ajax : service(),
	user : service(),
    actions:{
        getImage(){
            var videoObj    = { "video": true },
                errBack        = function(error){
                    // alert("Video capture error: ", error.code);
                };

            // Ask the browser for permission to use the Webcam
            if(navigator.getUserMedia){                    // Standard
                navigator.getUserMedia(videoObj, this.startWebcam, errBack);
            }else if(navigator.webkitGetUserMedia){        // WebKit
                navigator.webkitGetUserMedia(videoObj, this.startWebcam, errBack);
            }else if(navigator.mozGetUserMedia){        // Firefox
                navigator.mozGetUserMedia(videoObj, this.startWebcam, errBack);
            };
        },
        showCreateFile(){
            this.toggleProperty('isCreateFile');
        },
        createFile(){
            let fileName = $('input[name=name]').val();
            //let path = $('input[name=path]').val();
            let data = {};
            data.message = "New File Creation";
            data.content = btoa(" ");
            this.ajax.put('repos/' + this.model.repository.owner.login + "/" + this.model.repository.name + "/contents/" + fileName,{
                data : data
            }).then(function(response){
                console.log(response);
            })
        }
    },
    startWebcam(stream){
    var webcam    = $('#webcam')[0],
        video            = webcam.querySelectorAll('video'),
        canvas            = webcam.querySelectorAll('canvas');

    video.width = video.offsetWidth;

    if(navigator.getUserMedia){                    // Standard
        video.src = stream;
        video[0].play();
    }else if(navigator.webkitGetUserMedia){        // WebKit
        video.src = window.webkitURL.createObjectURL(stream);
        video[0].play();
    }else if(navigator.mozGetUserMedia){        // Firefox
        video.src = window.URL.createObjectURL(stream);
        video[0].play();
    };

    // Click to take the photo
    $('#webcam-popup .takephoto').click(function(){
        // Copying the image in a temporary canvas
        var temp = document.createElement('canvas');

        temp.width  = video.offsetWidth;
        temp.height = video.offsetHeight;

        var tempcontext = temp.getContext("2d"),
            tempScale = (temp.height/temp.width);

        temp.drawImage(
            video,
            0, 0,
            video.offsetWidth, video.offsetHeight
        );

        // Resize it to the size of our canvas
        canvas.style.height    = parseInt( canvas.offsetWidth * tempScale );
        canvas.width        = canvas.offsetWidth;
        canvas.height        = canvas.offsetHeight;
        var context        = canvas.getContext("2d"),
            scale        = canvas.width/temp.width;
        context.scale(scale, scale);
        context.drawImage(bigimage, 0, 0);
    });
    }
});
