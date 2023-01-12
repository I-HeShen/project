  window.onload = function() {
        var wrap = document.getElementById('wrap'),
            pic = document.getElementById('pic'),
            list = document.getElementById('list').getElementsByTagName('li'),
            index = 0,
            timer = null;

        // �������ڵȴ��Ķ�ʱ���������
        if (timer) {
            clearInterval(timer);
            timer = null;
        }

        // �Զ��л�
        timer = setInterval(autoPlay, 2000);

        // ���岢�����Զ����ź���
        function autoPlay() {
            index++;
            if (index >= list.length) {
                index = 0;
            }
            changeImg(index);
        }

        // ����ͼƬ�л�����
        function changeImg(curIndex) {
            for (var j = 0; j < list.length; j++) {
                list[j].className = "";
            }
            // �ı䵱ǰ��ʾ����
            list[curIndex].className = "on";
            pic.style.marginTop = -400 * curIndex + "px";
            index = curIndex;
        }

        // ��껮����������ʱֹͣ�Զ�����
        wrap.onmouseover = function() {
            clearInterval(timer);
        }

        // ����뿪��������ʱ������������һ��
        wrap.onmouseout = function() {
            timer = setInterval(autoPlay, 2000);
        }

        // �����������ֵ���ʵ�ֻ����л�����Ӧ��ͼƬ
        for (var i = 0; i < list.length; i++) {
            list[i].id = i;
            list[i].onmouseover = function() {
                clearInterval(timer);
                changeImg(this.id);
            }
        }
    }