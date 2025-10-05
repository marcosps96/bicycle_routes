import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#F8F9FA'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#212529',
        marginTop: 20
    },
    subtitle: {
        marginVertical: 12,
        fontSize: 16,
        color: '#6C757D',
        fontStyle: 'italic',
    },
    input: {
        width: '100%',
        padding: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: '#CED4DA',
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 16,
        fontSize: 16,
        color: '#495057'
    },
    button: {
        backgroundColor: '#007BFF',
        height: 50,
        width: '100%',
        marginVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
    },
    button_text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 24,
        borderColor: '#E9ECEF',
        width: '100%',
        marginTop: 16,
        borderRadius: 12,
        elevation: 2
    },
    card_title: {
        fontWeight: '700',
        fontSize: 16,
        color: '#343A40',
    },
    card_text: {
        marginTop: 12,
        fontSize: 15,
        color: '#495057'
    },
    sliderContainer: {
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
    },
    sliderLabel: {
        fontSize: 16,
        color: '#495057',
        textAlign: 'center',
        marginBottom: 8,
    },
    routeOptionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 24,
    },
    optionButton: {
        borderWidth: 1,
        borderColor: '#CED4DA',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        margin: 6,
    },
    selectedOptionButton: {
        backgroundColor: '#007BFF',
        borderColor: '#007BFF',
    },
    optionText: {
        color: '#495057',
    },
    selectedOptionText: {
        color: '#fff',
        fontWeight: '700',
    },
    label: {
        fontSize: 15,
        color: '#495057',
        alignSelf: 'flex-start',
        marginBottom: 8,
        fontWeight: '500',
    },
    loadingAnimation: {
  width: 150, // Ajuste o tamanho da animação
  height: 150,
  marginTop: 20,
}
});