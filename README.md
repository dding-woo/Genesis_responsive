# swiper라이브러리 연습.
## 슬라이드를 넘길 때 가운데 슬라이드에 효과주기
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/70466220/135721670-0c5fa3cd-8876-4c3a-a913-52660fa1ad59.gif)

-----------------------------------------------------------------

next에다 css를 작성해야 슬라이드를 넘길 때 마다 가운데 적용됨 <br>
1.swiper-slide-active는 현재 인덱스 슬라이드 <br>
2.swiper-slide-prev는 현재인덱스기준 전 슬라이드
```
swiper-slide best__slide swiper-slide-next{
  background-color:#210f20
}

```

## gsap scrollTrigger 찍먹
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/70466220/135753428-943732e5-ed2d-4eee-9b66-db44460960c0.gif)


scrollTrigger을 처음 사용해보았는데, 옵션들로 인해 정말 간편하게 스크롤 애니메이션 효과즐 줄수 있다.

markers옵션을 사용해서 요소의 star지점과 end지점을 봤는데 이상하게 값이 자꾸 변한다.
충분히 라이브러리에 대한 이해와 공부를 한 후 다시 시도해봐야겠다.

