---
layout: portfolio_item
title: "보스 전투 시스템 최적화 프로젝트"
description: "보스 공격 모듈화 및 성능 최적화를 통한 게임플레이 향상"
game_type: "액션"
project_type: "개인 프로젝트"
focus: "보스 전투 시스템 모듈화, 최적화, 협업경험"
image: "image.png"
date: 2024-10-17
order: 5
---

<div id="toc" class="toc-container">
    <h2>목차</h2>
    <ul>
        <li><a href="#project-overview">프로젝트 개요</a></li>
        <li><a href="#key-achievements">주요 성과</a>
            <ul>
                <li><a href="#boss-attack-modularization">보스 공격 모듈화</a></li>
                <li><a href="#performance-optimization">성능 최적화</a></li>
            </ul>
        </li>
        <li><a href="#tech-stack">기술 스택</a></li>
        <li><a href="#collaboration">협업 경험</a></li>
        <li><a href="#conclusion">결론</a></li>
    </ul>
</div>

<!-- 짧은 영상을 위한 플레이스홀더 -->
<div class="video-placeholder" style="background-color: #f0f0f0; height: 400px; display: flex; justify-content: center; align-items: center;">
    <p>여기에 프로젝트 시연 영상이 들어갑니다</p>
</div>

<h2 id="project-overview">프로젝트 개요</h2>

이 프로젝트에서는 액션 게임의 보스 전투 시스템을 구현하는 데 중점을 두었습니다. 주요 목표는 보스의 공격 패턴을 모듈화하고 시스템의 전반적인 성능을 최적화하는 것이었습니다.

<h2 id="key-achievements">주요 성과</h2>

<h3 id="boss-attack-modularization">1. 보스 공격 모듈화</h3>

보스의 공격 패턴을 개별 모듈로 분리하여 다음과 같은 이점을 얻었습니다:

- 새로운 공격 패턴을 쉽게 추가하고 기존 패턴을 수정할 수 있는 유연성 확보
- 코드의 가독성과 유지보수성 향상
- 다양한 보스 캐릭터 간 공격 패턴 재사용 가능

<!-- 이미지 플레이스홀더 -->
![보스 공격 모듈 다이어그램](![alt text](image-1.png))

<h3 id="performance-optimization">2. 성능 최적화</h3>

1. 공격 패턴 선정 과정에서 처리 속도개선 테스트를 진행 했습니다:

- `stackalloc`과 `Span<T>`을 활용하여 힙 할당을 줄임
- 임시 배열 대신 스택 메모리 사용으로 가비지 컬렉션 부하 감소
- 결과적으로 이 부분의 성능이 40% 향상됨

2. 대기 중인 적에서 비헤이비어 디자이너가 리소스를 사용하던 부분을 개선했습니다
- 프로파일러를 통한 문제 파악
- 적이 다수 존재하는 씬에서 40FPS -> 80FPS의 성능 향상


<h3 id="collaboration">3. 협업 경험</h3>
<div class="code-block-container">
<pre><code class= "language-javascript">
  function example() {
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
  function example() {
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
  function example() {
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
  function example() {
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
  function example() {
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
     console.log("This is a JavaScript code block");
   }
</code></pre>
</div>


1. 기획측에서 제공한 보스 플로우 차트를 통해 개발 방향을 의논하고 누락, 미흡한 부분은 바로바로 소통을 통해 해결
2. 깃을 통한 버전 관리 중 손머지를 통해 머지 충돌을 해소

<h2 id="tech-stack">기술 스택</h2>

- C#
- Unity Engine

<h2 id="conclusion">결론</h2>

이 프로젝트를 통해 게임의 중요 시스템인 보스 전투 메커니즘을 유연하게 구현이 되었습니다. 모듈화된 설계로 향후 콘텐츠 확장이 용이해졌으며, 최적화를 통해 플레이어들에게 더 부드럽고 반응성 좋은 게임플레이 경험을 제공할 수 있게 되었습니다.
협업 경험을 통해 실무에 조금 더 가까워진 것 같습니다.
