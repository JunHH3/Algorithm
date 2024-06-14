def solution(money):
  answer = []
  item = money // 5500 # 5500원으로 몇 개의 아이템을 살 수 있을 지 계산
  item2 = money % 5500 # 나머지 돈 계산
  answer = [item, item2]
  return answer