#1부터 50까지 랜덤한 숫자를 <i style="--i:숫자"></i>태그로 감싸서 출력하시오.
import random
for i in range(50):
    print("<i style=\"--i:%d\"></i>" % (random.randint(1,50)))