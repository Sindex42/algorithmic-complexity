def solve(problem)
  if 'problem is trivial'
    return problem/solution

  else
    'break down problem into subproblems'
    solutions =
      subproblems.map { |pb|
        solve(pb)
      }
    'merge solutions'
  end
end

# merge sort
def sort (arr)
  l = arr.length

  if l < 2
    return arr
  else
    # breakdown
    left = arr[0..(l / 2)] # start to half
    right  = arr[(l / 2)..-1] # half to end

    # recursive call
    sorted_left = sort(left)
    sorted_right = sort(right)

    # merging
    idx_l, idx_r = 0, 0
    result = []

    while idx_l < sorted_left.length && idx_r < sorted_right.length
      if sorted_left[idx_l] <= sorted_right[idx_r]
        result << sorted_left[idx_l]
        idx_l += 1
      else
        result << sorted_right[idx_r]
        idx_r += 1
      end
    end

    if 'reached the end of sorted_left'
      'append rest of sorted_right'
    else
      'append rest of sorted_left'
    end

    return result
  end
end
