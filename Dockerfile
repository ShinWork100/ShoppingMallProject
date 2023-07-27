FROM ubuntu:20.04
#자동으로 yes 누르는게 -y 아니면 스탑하니까
RUN apt update && apt install -y python3
#디렉토리가 없으면 만들고 아니면 그냥 들어감
WORKDIR /var/www/html
#index workdir folder 아래 생성됨
# RUN echo "Hello, <strong>Docker/strong>" > index.html
#위 디렉토리에서 indext.html 복사하라 / 어떤 포트로 가서 웹 서비스 사용자들이 그 포트를 사용함
CMD ["python3", "-u", "-m", "http.server"]
