def shuffle_bad(arr)
  new_arr = []
  until arr.empty? do
    random_index = rand(arr.length)
    new_arr << arr[random_index]
    arr.deleteAt[random_index]
  end
  new_arr
end

def shuffle_better(arr)
  new_arr = []
  until arr.empty? do
    random_index = rand(arr.length)
    new_arr << arr[random_index]
    arr[random_index] = arr.last
    arr.pop
  end
  new_arr
end
