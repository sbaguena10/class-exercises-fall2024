import java.util.ArrayList;

public class ContainsPair {

	public static boolean containsPair(ArrayList<Integer> list) {
		ArrayList<Integer> duplicates = new ArrayList<>();

		for (int i = 0; i < list.size(); i++) {
			int num = list.get(i);
			if (duplicates.contains(num)) {
				return true;
			}
			duplicates.add(num);
		}

		return false;
	}

	public static void main(String[] args) {

		ArrayList<Integer> newList = new ArrayList<Integer>();

		newList.add(12);
		newList.add(7);
		newList.add(1);
		newList.add(19);
		newList.add(7);

		System.out.println(containsPair(newList));

	}

}
